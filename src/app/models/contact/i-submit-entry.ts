export interface ISubmitEntry {
    fullName: string;
    phoneNumber: string;
    email: string;
    message: string;
    website?: string;
    recaptchaToken: string;
}
