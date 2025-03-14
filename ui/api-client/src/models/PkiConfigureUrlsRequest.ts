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
 * @interface PkiConfigureUrlsRequest
 */
export interface PkiConfigureUrlsRequest {
  /**
   * Comma-separated list of URLs to be used for the CRL distribution points attribute. See also RFC 5280 Section 4.2.1.13.
   * @type {Array<string>}
   * @memberof PkiConfigureUrlsRequest
   */
  crlDistributionPoints?: Array<string>;
  /**
   * Whether or not to enabling templating of the above AIA fields. When templating is enabled the special values '{{issuer_id}}', '{{cluster_path}}', and '{{cluster_aia_path}}' are available, but the addresses are not checked for URI validity until issuance time. Using '{{cluster_path}}' requires /config/cluster's 'path' member to be set on all PR Secondary clusters and using '{{cluster_aia_path}}' requires /config/cluster's 'aia_path' member to be set on all PR secondary clusters.
   * @type {boolean}
   * @memberof PkiConfigureUrlsRequest
   */
  enableTemplating?: boolean;
  /**
   * Comma-separated list of URLs to be used for the issuing certificate attribute. See also RFC 5280 Section 4.2.2.1.
   * @type {Array<string>}
   * @memberof PkiConfigureUrlsRequest
   */
  issuingCertificates?: Array<string>;
  /**
   * Comma-separated list of URLs to be used for the OCSP servers attribute. See also RFC 5280 Section 4.2.2.1.
   * @type {Array<string>}
   * @memberof PkiConfigureUrlsRequest
   */
  ocspServers?: Array<string>;
}

/**
 * Check if a given object implements the PkiConfigureUrlsRequest interface.
 */
export function instanceOfPkiConfigureUrlsRequest(value: object): value is PkiConfigureUrlsRequest {
  return true;
}

export function PkiConfigureUrlsRequestFromJSON(json: any): PkiConfigureUrlsRequest {
  return PkiConfigureUrlsRequestFromJSONTyped(json, false);
}

export function PkiConfigureUrlsRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiConfigureUrlsRequest {
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

export function PkiConfigureUrlsRequestToJSON(json: any): PkiConfigureUrlsRequest {
  return PkiConfigureUrlsRequestToJSONTyped(json, false);
}

export function PkiConfigureUrlsRequestToJSONTyped(
  value?: PkiConfigureUrlsRequest | null,
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
