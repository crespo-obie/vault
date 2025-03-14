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
 * @interface PkiWriteRolesRoleAcmeNewAccountRequest
 */
export interface PkiWriteRolesRoleAcmeNewAccountRequest {
  /**
   * ACME request 'payload' value
   * @type {string}
   * @memberof PkiWriteRolesRoleAcmeNewAccountRequest
   */
  payload?: string;
  /**
   * ACME request 'protected' value
   * @type {string}
   * @memberof PkiWriteRolesRoleAcmeNewAccountRequest
   */
  _protected?: string;
  /**
   * ACME request 'signature' value
   * @type {string}
   * @memberof PkiWriteRolesRoleAcmeNewAccountRequest
   */
  signature?: string;
}

/**
 * Check if a given object implements the PkiWriteRolesRoleAcmeNewAccountRequest interface.
 */
export function instanceOfPkiWriteRolesRoleAcmeNewAccountRequest(
  value: object
): value is PkiWriteRolesRoleAcmeNewAccountRequest {
  return true;
}

export function PkiWriteRolesRoleAcmeNewAccountRequestFromJSON(
  json: any
): PkiWriteRolesRoleAcmeNewAccountRequest {
  return PkiWriteRolesRoleAcmeNewAccountRequestFromJSONTyped(json, false);
}

export function PkiWriteRolesRoleAcmeNewAccountRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteRolesRoleAcmeNewAccountRequest {
  if (json == null) {
    return json;
  }
  return {
    payload: json['payload'] == null ? undefined : json['payload'],
    _protected: json['protected'] == null ? undefined : json['protected'],
    signature: json['signature'] == null ? undefined : json['signature'],
  };
}

export function PkiWriteRolesRoleAcmeNewAccountRequestToJSON(
  json: any
): PkiWriteRolesRoleAcmeNewAccountRequest {
  return PkiWriteRolesRoleAcmeNewAccountRequestToJSONTyped(json, false);
}

export function PkiWriteRolesRoleAcmeNewAccountRequestToJSONTyped(
  value?: PkiWriteRolesRoleAcmeNewAccountRequest | null,
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
