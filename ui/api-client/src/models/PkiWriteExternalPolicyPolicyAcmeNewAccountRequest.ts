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
 * @interface PkiWriteExternalPolicyPolicyAcmeNewAccountRequest
 */
export interface PkiWriteExternalPolicyPolicyAcmeNewAccountRequest {
  /**
   * ACME request 'payload' value
   * @type {string}
   * @memberof PkiWriteExternalPolicyPolicyAcmeNewAccountRequest
   */
  payload?: string;
  /**
   * ACME request 'protected' value
   * @type {string}
   * @memberof PkiWriteExternalPolicyPolicyAcmeNewAccountRequest
   */
  _protected?: string;
  /**
   * ACME request 'signature' value
   * @type {string}
   * @memberof PkiWriteExternalPolicyPolicyAcmeNewAccountRequest
   */
  signature?: string;
}

/**
 * Check if a given object implements the PkiWriteExternalPolicyPolicyAcmeNewAccountRequest interface.
 */
export function instanceOfPkiWriteExternalPolicyPolicyAcmeNewAccountRequest(
  value: object
): value is PkiWriteExternalPolicyPolicyAcmeNewAccountRequest {
  return true;
}

export function PkiWriteExternalPolicyPolicyAcmeNewAccountRequestFromJSON(
  json: any
): PkiWriteExternalPolicyPolicyAcmeNewAccountRequest {
  return PkiWriteExternalPolicyPolicyAcmeNewAccountRequestFromJSONTyped(json, false);
}

export function PkiWriteExternalPolicyPolicyAcmeNewAccountRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteExternalPolicyPolicyAcmeNewAccountRequest {
  if (json == null) {
    return json;
  }
  return {
    payload: json['payload'] == null ? undefined : json['payload'],
    _protected: json['protected'] == null ? undefined : json['protected'],
    signature: json['signature'] == null ? undefined : json['signature'],
  };
}

export function PkiWriteExternalPolicyPolicyAcmeNewAccountRequestToJSON(
  json: any
): PkiWriteExternalPolicyPolicyAcmeNewAccountRequest {
  return PkiWriteExternalPolicyPolicyAcmeNewAccountRequestToJSONTyped(json, false);
}

export function PkiWriteExternalPolicyPolicyAcmeNewAccountRequestToJSONTyped(
  value?: PkiWriteExternalPolicyPolicyAcmeNewAccountRequest | null,
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
