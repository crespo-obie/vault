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
 * @interface LdapLibraryCheckOutRequest
 */
export interface LdapLibraryCheckOutRequest {
  /**
   * The length of time before the check-out will expire, in seconds.
   * @type {string}
   * @memberof LdapLibraryCheckOutRequest
   */
  ttl?: string;
}

/**
 * Check if a given object implements the LdapLibraryCheckOutRequest interface.
 */
export function instanceOfLdapLibraryCheckOutRequest(value: object): value is LdapLibraryCheckOutRequest {
  return true;
}

export function LdapLibraryCheckOutRequestFromJSON(json: any): LdapLibraryCheckOutRequest {
  return LdapLibraryCheckOutRequestFromJSONTyped(json, false);
}

export function LdapLibraryCheckOutRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LdapLibraryCheckOutRequest {
  if (json == null) {
    return json;
  }
  return {
    ttl: json['ttl'] == null ? undefined : json['ttl'],
  };
}

export function LdapLibraryCheckOutRequestToJSON(json: any): LdapLibraryCheckOutRequest {
  return LdapLibraryCheckOutRequestToJSONTyped(json, false);
}

export function LdapLibraryCheckOutRequestToJSONTyped(
  value?: LdapLibraryCheckOutRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    ttl: value['ttl'],
  };
}
