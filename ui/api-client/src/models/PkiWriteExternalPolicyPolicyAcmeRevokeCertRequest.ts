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
 * @interface PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest
 */
export interface PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest {
  /**
   * ACME request 'payload' value
   * @type {string}
   * @memberof PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest
   */
  payload?: string;
  /**
   * ACME request 'protected' value
   * @type {string}
   * @memberof PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest
   */
  _protected?: string;
  /**
   * ACME request 'signature' value
   * @type {string}
   * @memberof PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest
   */
  signature?: string;
}

/**
 * Check if a given object implements the PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest interface.
 */
export function instanceOfPkiWriteExternalPolicyPolicyAcmeRevokeCertRequest(
  value: object
): value is PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest {
  return true;
}

export function PkiWriteExternalPolicyPolicyAcmeRevokeCertRequestFromJSON(
  json: any
): PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest {
  return PkiWriteExternalPolicyPolicyAcmeRevokeCertRequestFromJSONTyped(json, false);
}

export function PkiWriteExternalPolicyPolicyAcmeRevokeCertRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest {
  if (json == null) {
    return json;
  }
  return {
    payload: json['payload'] == null ? undefined : json['payload'],
    _protected: json['protected'] == null ? undefined : json['protected'],
    signature: json['signature'] == null ? undefined : json['signature'],
  };
}

export function PkiWriteExternalPolicyPolicyAcmeRevokeCertRequestToJSON(
  json: any
): PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest {
  return PkiWriteExternalPolicyPolicyAcmeRevokeCertRequestToJSONTyped(json, false);
}

export function PkiWriteExternalPolicyPolicyAcmeRevokeCertRequestToJSONTyped(
  value?: PkiWriteExternalPolicyPolicyAcmeRevokeCertRequest | null,
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
