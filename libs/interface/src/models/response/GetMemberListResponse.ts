// tslint:disable
/**
 * next-taco
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GetMemberListResponseData } from '../../';

/**
 * @export
 * @interface GetMemberListResponse
 */
export interface GetMemberListResponse {
	/**
	 * @type {number}
	 * @memberof GetMemberListResponse
	 */
	code: number;
	/**
	 * @type {string}
	 * @memberof GetMemberListResponse
	 */
	message: string;
	/**
	 * @type {GetMemberListResponseData}
	 * @memberof GetMemberListResponse
	 */
	data: GetMemberListResponseData;
}
