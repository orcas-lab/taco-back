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

import { RegisterResponseData } from '../../';

/**
 * @export
 * @interface RegisterResponse
 */
export interface RegisterResponse {
	/**
	 * @type {number}
	 * @memberof RegisterResponse
	 */
	code: number;
	/**
	 * @type {string}
	 * @memberof RegisterResponse
	 */
	message: string;
	/**
	 * @type {RegisterResponseData}
	 * @memberof RegisterResponse
	 */
	data: RegisterResponseData;
}
