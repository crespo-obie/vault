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
 * @interface KerberosLoginRequest
 */
export interface KerberosLoginRequest {
  /**
   * SPNEGO Authorization header. Required.
   * @type {string}
   * @memberof KerberosLoginRequest
   */
  authorization?: string;
}

/**
 * Check if a given object implements the KerberosLoginRequest interface.
 */
export function instanceOfKerberosLoginRequest(value: object): value is KerberosLoginRequest {
  return true;
}

export function KerberosLoginRequestFromJSON(json: any): KerberosLoginRequest {
  return KerberosLoginRequestFromJSONTyped(json, false);
}

export function KerberosLoginRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): KerberosLoginRequest {
  if (json == null) {
    return json;
  }
  return {
    authorization: json['authorization'] == null ? undefined : json['authorization'],
  };
}

export function KerberosLoginRequestToJSON(json: any): KerberosLoginRequest {
  return KerberosLoginRequestToJSONTyped(json, false);
}

export function KerberosLoginRequestToJSONTyped(
  value?: KerberosLoginRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    authorization: value['authorization'],
  };
}
