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

import { GetQuestionResponseData } from '../../';

/**
 * @export
 * @interface GetQuestionResponse
 */
export interface GetQuestionResponse {
	/**
	 * @type {number}
	 * @memberof GetQuestionResponse
	 */
	code: number;
	/**
	 * @type {string}
	 * @memberof GetQuestionResponse
	 */
	message: string;
	/**
	 * @type {GetQuestionResponseData}
	 * @memberof GetQuestionResponse
	 */
	data: GetQuestionResponseData;
}