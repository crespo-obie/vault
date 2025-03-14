/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface PkiWriteAcmeOrderOrderIdFinalizeRequest
 */
export interface PkiWriteAcmeOrderOrderIdFinalizeRequest {
  /**
   * ACME request 'payload' value
   * @type {string}
   * @memberof PkiWriteAcmeOrderOrderIdFinalizeRequest
   */
  payload?: string;
  /**
   * ACME request 'protected' value
   * @type {string}
   * @memberof PkiWriteAcmeOrderOrderIdFinalizeRequest
   */
  _protected?: string;
  /**
   * ACME request 'signature' value
   * @type {string}
   * @memberof PkiWriteAcmeOrderOrderIdFinalizeRequest
   */
  signature?: string;
}

/**
 * Check if a given object implements the PkiWriteAcmeOrderOrderIdFinalizeRequest interface.
 */
export function instanceOfPkiWriteAcmeOrderOrderIdFinalizeRequest(
  value: object
): value is PkiWriteAcmeOrderOrderIdFinalizeRequest {
  return true;
}

export function PkiWriteAcmeOrderOrderIdFinalizeRequestFromJSON(
  json: any
): PkiWriteAcmeOrderOrderIdFinalizeRequest {
  return PkiWriteAcmeOrderOrderIdFinalizeRequestFromJSONTyped(json, false);
}

export function PkiWriteAcmeOrderOrderIdFinalizeRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteAcmeOrderOrderIdFinalizeRequest {
  if (json == null) {
    return json;
  }
  return {
    payload: json['payload'] == null ? undefined : json['payload'],
    _protected: json['protected'] == null ? undefined : json['protected'],
    signature: json['signature'] == null ? undefined : json['signature'],
  };
}

export function PkiWriteAcmeOrderOrderIdFinalizeRequestToJSON(
  json: any
): PkiWriteAcmeOrderOrderIdFinalizeRequest {
  return PkiWriteAcmeOrderOrderIdFinalizeRequestToJSONTyped(json, false);
}

export function PkiWriteAcmeOrderOrderIdFinalizeRequestToJSONTyped(
  value?: PkiWriteAcmeOrderOrderIdFinalizeRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    payload: value['payload'],
    protected: value['_protected'],
    signature: value['signature'],
  };
}
