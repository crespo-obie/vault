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
 * @interface PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest {
  /**
   * ACME request 'payload' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest
   */
  payload?: string;
  /**
   * ACME request 'protected' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest
   */
  _protected?: string;
  /**
   * ACME request 'signature' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest
   */
  signature?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest(
  value: object
): value is PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest {
  return true;
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequestFromJSON(
  json: any
): PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest {
  return PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest {
  if (json == null) {
    return json;
  }
  return {
    payload: json['payload'] == null ? undefined : json['payload'],
    _protected: json['protected'] == null ? undefined : json['protected'],
    signature: json['signature'] == null ? undefined : json['signature'],
  };
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequestToJSON(
  json: any
): PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest {
  return PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequestToJSONTyped(
  value?: PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdRequest | null,
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
