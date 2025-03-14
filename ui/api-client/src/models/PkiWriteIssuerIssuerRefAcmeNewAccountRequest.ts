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
 * @interface PkiWriteIssuerIssuerRefAcmeNewAccountRequest
 */
export interface PkiWriteIssuerIssuerRefAcmeNewAccountRequest {
  /**
   * ACME request 'payload' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefAcmeNewAccountRequest
   */
  payload?: string;
  /**
   * ACME request 'protected' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefAcmeNewAccountRequest
   */
  _protected?: string;
  /**
   * ACME request 'signature' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefAcmeNewAccountRequest
   */
  signature?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefAcmeNewAccountRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefAcmeNewAccountRequest(
  value: object
): value is PkiWriteIssuerIssuerRefAcmeNewAccountRequest {
  return true;
}

export function PkiWriteIssuerIssuerRefAcmeNewAccountRequestFromJSON(
  json: any
): PkiWriteIssuerIssuerRefAcmeNewAccountRequest {
  return PkiWriteIssuerIssuerRefAcmeNewAccountRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefAcmeNewAccountRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteIssuerIssuerRefAcmeNewAccountRequest {
  if (json == null) {
    return json;
  }
  return {
    payload: json['payload'] == null ? undefined : json['payload'],
    _protected: json['protected'] == null ? undefined : json['protected'],
    signature: json['signature'] == null ? undefined : json['signature'],
  };
}

export function PkiWriteIssuerIssuerRefAcmeNewAccountRequestToJSON(
  json: any
): PkiWriteIssuerIssuerRefAcmeNewAccountRequest {
  return PkiWriteIssuerIssuerRefAcmeNewAccountRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefAcmeNewAccountRequestToJSONTyped(
  value?: PkiWriteIssuerIssuerRefAcmeNewAccountRequest | null,
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
