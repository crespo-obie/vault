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
 * @interface InternalClientActivityConfigureRequest
 */
export interface InternalClientActivityConfigureRequest {
  /**
   * Number of months to report if no start date specified.
   * @type {number}
   * @memberof InternalClientActivityConfigureRequest
   * @deprecated
   */
  defaultReportMonths?: number;
  /**
   * Enable or disable collection of client count: enable, disable, or default.
   * @type {string}
   * @memberof InternalClientActivityConfigureRequest
   */
  enabled?: string;
  /**
   * Number of months of client data to retain. Setting to 0 will clear all existing data.
   * @type {number}
   * @memberof InternalClientActivityConfigureRequest
   */
  retentionMonths?: number;
}

/**
 * Check if a given object implements the InternalClientActivityConfigureRequest interface.
 */
export function instanceOfInternalClientActivityConfigureRequest(
  value: object
): value is InternalClientActivityConfigureRequest {
  return true;
}

export function InternalClientActivityConfigureRequestFromJSON(
  json: any
): InternalClientActivityConfigureRequest {
  return InternalClientActivityConfigureRequestFromJSONTyped(json, false);
}

export function InternalClientActivityConfigureRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InternalClientActivityConfigureRequest {
  if (json == null) {
    return json;
  }
  return {
    defaultReportMonths: json['default_report_months'] == null ? undefined : json['default_report_months'],
    enabled: json['enabled'] == null ? undefined : json['enabled'],
    retentionMonths: json['retention_months'] == null ? undefined : json['retention_months'],
  };
}

export function InternalClientActivityConfigureRequestToJSON(
  json: any
): InternalClientActivityConfigureRequest {
  return InternalClientActivityConfigureRequestToJSONTyped(json, false);
}

export function InternalClientActivityConfigureRequestToJSONTyped(
  value?: InternalClientActivityConfigureRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    default_report_months: value['defaultReportMonths'],
    enabled: value['enabled'],
    retention_months: value['retentionMonths'],
  };
}
