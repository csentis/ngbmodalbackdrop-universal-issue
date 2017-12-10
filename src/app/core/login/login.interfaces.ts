/**
 * @License: No License. This software is unlicensed.
 * @Copyright: Copyright (c) 2017 capaplan UG (haftungsbeschränkt)
 * @Author: Christian Sentis
 * @Date: 2017-10-28 21:45:18
 * @Last Modified by: Christian Sentis
 * @Last Modified time: 2017-10-31 12:27:20
 */


/**
 * Describes the interface for (optional) validation messages for the login form as produced by {@link ValidationMsgService}.
 */
export interface LoginFormValidationMsg {
    /** Optional validation message for the email field of the login form. */
    email?: string;
    /** Optional validation message for the resetToken field of the login form. */
    password?: string;
}
