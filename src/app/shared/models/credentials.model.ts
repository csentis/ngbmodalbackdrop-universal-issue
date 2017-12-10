/**
 * The CredentialsModel class is the model for how user login data looks like.
 *
 * It is implemented / inherited by the following class(es)
 * - {@link SignupProcessedModel}
 */
export class CredentialsModel {

    /**
     * Creates and initializes the object created with this class.
     *
     * @param email {string} The email address of a user as string.
     * @param password {string} The password of a user as string.
     */
    constructor(

        public email: string,
        public password: string

    ) { }

}
