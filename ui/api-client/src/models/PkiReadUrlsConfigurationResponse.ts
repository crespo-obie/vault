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
 * @interface PkiReadUrlsConfigurationResponse
 */
export interface PkiReadUrlsConfigurationResponse {
  /**
   * Comma-separated list of URLs to be used for the CRL distribution points attribute. See also RFC 5280 Section 4.2.1.13.
   * @type {Array<string>}
   * @memberof PkiReadUrlsConfigurationResponse
   */
  crlDistributionPoints?: Array<string>;
  /**
   * Whether or not to enable templating of the above AIA fields. When templating is enabled the special values '{{issuer_id}}' and '{{cluster_path}}' are available, but the addresses are not checked for URI validity until issuance time. This requires /config/cluster's path to be set on all PR Secondary clusters.
   * @type {boolean}
   * @memberof PkiReadUrlsConfigurationResponse
   */
  enableTemplating?: boolean;
  /**
   * Comma-separated list of URLs to be used for the issuing certificate attribute. See also RFC 5280 Section 4.2.2.1.
   * @type {Array<string>}
   * @memberof PkiReadUrlsConfigurationResponse
   */
  issuingCertificates?: Array<string>;
  /**
   * Comma-separated list of URLs to be used for the OCSP servers attribute. See also RFC 5280 Section 4.2.2.1.
   * @type {Array<string>}
   * @memberof PkiReadUrlsConfigurationResponse
   */
  ocspServers?: Array<string>;
}

/**
 * Check if a given object implements the PkiReadUrlsConfigurationResponse interface.
 */
export function instanceOfPkiReadUrlsConfigurationResponse(
  value: object
): value is PkiReadUrlsConfigurationResponse {
  return true;
}

export function PkiReadUrlsConfigurationResponseFromJSON(json: any): PkiReadUrlsConfigurationResponse {
  return PkiReadUrlsConfigurationResponseFromJSONTyped(json, false);
}

export function PkiReadUrlsConfigurationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiReadUrlsConfigurationResponse {
  if (json == null) {
    return json;
  }
  return {
    crlDistributionPoints:
      json['crl_distribution_points'] == null ? undefined : json['crl_distribution_points'],
    enableTemplating: json['enable_templating'] == null ? undefined : json['enable_templating'],
    issuingCertificates: json['issuing_certificates'] == null ? undefined : json['issuing_certificates'],
    ocspServers: json['ocsp_servers'] == null ? undefined : json['ocsp_servers'],
  };
}

export function PkiReadUrlsConfigurationResponseToJSON(json: any): PkiReadUrlsConfigurationResponse {
  return PkiReadUrlsConfigurationResponseToJSONTyped(json, false);
}

export function PkiReadUrlsConfigurationResponseToJSONTyped(
  value?: PkiReadUrlsConfigurationResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    crl_distribution_points: value['crlDistributionPoints'],
    enable_templating: value['enableTemplating'],
    issuing_certificates: value['issuingCertificates'],
    ocsp_servers: value['ocspServers'],
  };
}
