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
 * @interface PkiIssuerSignSelfIssuedResponse
 */
export interface PkiIssuerSignSelfIssuedResponse {
  /**
   * Certificate
   * @type {string}
   * @memberof PkiIssuerSignSelfIssuedResponse
   */
  certificate?: string;
  /**
   * Issuing CA
   * @type {string}
   * @memberof PkiIssuerSignSelfIssuedResponse
   */
  issuingCa?: string;
}

/**
 * Check if a given object implements the PkiIssuerSignSelfIssuedResponse interface.
 */
export function instanceOfPkiIssuerSignSelfIssuedResponse(
  value: object
): value is PkiIssuerSignSelfIssuedResponse {
  return true;
}

export function PkiIssuerSignSelfIssuedResponseFromJSON(json: any): PkiIssuerSignSelfIssuedResponse {
  return PkiIssuerSignSelfIssuedResponseFromJSONTyped(json, false);
}

export function PkiIssuerSignSelfIssuedResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiIssuerSignSelfIssuedResponse {
  if (json == null) {
    return json;
  }
  return {
    certificate: json['certificate'] == null ? undefined : json['certificate'],
    issuingCa: json['issuing_ca'] == null ? undefined : json['issuing_ca'],
  };
}

export function PkiIssuerSignSelfIssuedResponseToJSON(json: any): PkiIssuerSignSelfIssuedResponse {
  return PkiIssuerSignSelfIssuedResponseToJSONTyped(json, false);
}

export function PkiIssuerSignSelfIssuedResponseToJSONTyped(
  value?: PkiIssuerSignSelfIssuedResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    certificate: value['certificate'],
    issuing_ca: value['issuingCa'],
  };
}
