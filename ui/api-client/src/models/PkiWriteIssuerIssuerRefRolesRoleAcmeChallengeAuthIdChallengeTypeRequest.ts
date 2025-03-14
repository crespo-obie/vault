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
 * @interface PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest
 */
export interface PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest {
  /**
   * ACME request 'payload' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest
   */
  payload?: string;
  /**
   * ACME request 'protected' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest
   */
  _protected?: string;
  /**
   * ACME request 'signature' value
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest
   */
  signature?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest(
  value: object
): value is PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest {
  return true;
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequestFromJSON(
  json: any
): PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest {
  return PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest {
  if (json == null) {
    return json;
  }
  return {
    payload: json['payload'] == null ? undefined : json['payload'],
    _protected: json['protected'] == null ? undefined : json['protected'],
    signature: json['signature'] == null ? undefined : json['signature'],
  };
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequestToJSON(
  json: any
): PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest {
  return PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequestToJSONTyped(
  value?: PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest | null,
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
