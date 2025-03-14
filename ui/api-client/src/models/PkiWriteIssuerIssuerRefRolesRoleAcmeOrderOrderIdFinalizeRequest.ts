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
 * @interface PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest
 */
export interface PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest {
  /**
   * ACME request 'payload' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest
   */
  payload?: string;
  /**
   * ACME request 'protected' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest
   */
  _protected?: string;
  /**
   * ACME request 'signature' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest
   */
  signature?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest(
  value: object
): value is PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest {
  return true;
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequestFromJSON(
  json: any
): PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest {
  return PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest {
  if (json == null) {
    return json;
  }
  return {
    payload: json['payload'] == null ? undefined : json['payload'],
    _protected: json['protected'] == null ? undefined : json['protected'],
    signature: json['signature'] == null ? undefined : json['signature'],
  };
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequestToJSON(
  json: any
): PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest {
  return PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequestToJSONTyped(
  value?: PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest | null,
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
