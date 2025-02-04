import { ExtensionTypes, RequestLogicTypes } from '@requestnetwork/types';
import { FeeReferenceBasedPaymentNetwork } from '../fee-reference-based';
import { ICurrencyManager } from '@requestnetwork/currency';

const CURRENT_VERSION = '0.2.0';

/**
 * Implementation of the payment network to pay in ERC20 based on a transferable receivable contract.
 */
export default class Erc20TransferableReceivablePaymentNetwork<
  TCreationParameters extends
    ExtensionTypes.PnFeeReferenceBased.ICreationParameters = ExtensionTypes.PnFeeReferenceBased.ICreationParameters,
> extends FeeReferenceBasedPaymentNetwork<TCreationParameters> {
  public constructor(
    currencyManager: ICurrencyManager,
    extensionId: ExtensionTypes.PAYMENT_NETWORK_ID = ExtensionTypes.PAYMENT_NETWORK_ID
      .ERC20_TRANSFERABLE_RECEIVABLE,
    currentVersion: string = CURRENT_VERSION,
  ) {
    super(currencyManager, extensionId, currentVersion, RequestLogicTypes.CURRENCY.ERC20);
  }
}
