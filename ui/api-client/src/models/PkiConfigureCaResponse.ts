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
 * @interface PkiConfigureCaResponse
 */
export interface PkiConfigureCaResponse {
  /**
   * Existing issuers specified as part of the import bundle of this request
   * @type {Array<string>}
   * @memberof PkiConfigureCaResponse
   */
  existingIssuers?: Array<string>;
  /**
   * Existing keys specified as part of the import bundle of this request
   * @type {Array<string>}
   * @memberof PkiConfigureCaResponse
   */
  existingKeys?: Array<string>;
  /**
   * Net-new issuers imported as a part of this request
   * @type {Array<string>}
   * @memberof PkiConfigureCaResponse
   */
  importedIssuers?: Array<string>;
  /**
   * Net-new keys imported as a part of this request
   * @type {Array<string>}
   * @memberof PkiConfigureCaResponse
   */
  importedKeys?: Array<string>;
  /**
   * A mapping of issuer_id to key_id for all issuers included in this request
   * @type {object}
   * @memberof PkiConfigureCaResponse
   */
  mapping?: object;
}

/**
 * Check if a given object implements the PkiConfigureCaResponse interface.
 */
export function instanceOfPkiConfigureCaResponse(value: object): value is PkiConfigureCaResponse {
  return true;
}

export function PkiConfigureCaResponseFromJSON(json: any): PkiConfigureCaResponse {
  return PkiConfigureCaResponseFromJSONTyped(json, false);
}

export function PkiConfigureCaResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiConfigureCaResponse {
  if (json == null) {
    return json;
  }
  return {
    existingIssuers: json['existing_issuers'] == null ? undefined : json['existing_issuers'],
    existingKeys: json['existing_keys'] == null ? undefined : json['existing_keys'],
    importedIssuers: json['imported_issuers'] == null ? undefined : json['imported_issuers'],
    importedKeys: json['imported_keys'] == null ? undefined : json['imported_keys'],
    mapping: json['mapping'] == null ? undefined : json['mapping'],
  };
}

export function PkiConfigureCaResponseToJSON(json: any): PkiConfigureCaResponse {
  return PkiConfigureCaResponseToJSONTyped(json, false);
}

export function PkiConfigureCaResponseToJSONTyped(
  value?: PkiConfigureCaResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    existing_issuers: value['existingIssuers'],
    existing_keys: value['existingKeys'],
    imported_issuers: value['importedIssuers'],
    imported_keys: value['importedKeys'],
    mapping: value['mapping'],
  };
}
