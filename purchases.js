import { Capacitor } from '@capacitor/core';
import { NativePurchases, PURCHASE_TYPE } from '@capgo/native-purchases';

const PRODUCT_ID = 'site.imemine.app.plus';
let unlocked = false;
let product = null;
let onChange = () => {};
const matches = p => p?.productIdentifier === PRODUCT_ID && p?.purchaseState !== 'PENDING' && p?.purchaseState !== 'CANCELED' && p?.isActive !== false;
async function checkEntitlement() {
  const { purchases = [] } = await NativePurchases.getPurchases({ productType: PURCHASE_TYPE.INAPP, onlyCurrentEntitlements: true });
  unlocked = purchases.some(matches);
  onChange();
  return unlocked;
}
export const purchases = {
  isNative: Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios',
  isUnlocked: () => unlocked,
  setOnChange: fn => { onChange = fn; },
  async initialize() {
    if (!this.isNative) return;
    try {
      const { products = [] } = await NativePurchases.getProducts({ productIdentifiers: [PRODUCT_ID], productType: PURCHASE_TYPE.INAPP });
      product = products.find(p => p.identifier === PRODUCT_ID || p.productIdentifier === PRODUCT_ID) || null;
    } catch (err) { console.warn('Store product unavailable', err); }
    try { await checkEntitlement(); } catch (err) { console.warn('Entitlement check unavailable', err); }
    try {
      await NativePurchases.addListener('transactionUpdated', async () => {
        try { await checkEntitlement(); } catch (err) { console.warn('Entitlement refresh failed', err); }
      });
    } catch (err) { console.warn('StoreKit listener unavailable', err); }
    onChange();
  },
  price: () => product?.priceString || product?.displayPrice || null,
  async buy() {
    if (!this.isNative || !product) throw new Error('The App Store purchase is not available yet. Try again later.');
    const transaction = await NativePurchases.purchaseProduct({ productIdentifier: PRODUCT_ID, productType: PURCHASE_TYPE.INAPP });
    if (transaction && !matches(transaction)) throw new Error('Purchase was not completed.');
    await checkEntitlement();
    if (!unlocked) throw new Error('Purchase is processing. Please try Restore Purchases shortly.');
  },
  async restore() {
    if (!this.isNative) throw new Error('Purchases are available in the iPhone app.');
    await NativePurchases.restorePurchases();
    return checkEntitlement();
  }
};
