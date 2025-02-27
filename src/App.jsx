import React from 'react';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center mb-4">
                <img src="src/assets/logo-white.png" alt="Samyati Logo" className="w-[20%]" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
            <ul className="list-disc pl-6">
                <li className="mb-2">
                    <strong>Introduction</strong>: Samyati is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our fitness tracker app.
                </li>
                <li className="mb-2">
                    <strong>Information We Collect</strong>:
                    <ul className="list-disc pl-6">
                        <li>Name, email address, and other contact details when you create an account.</li>
                        <li>Fitness Data: Activity levels, workout routines, and other health-related information.</li>
                        <li>Device Information: Information about your device, including the model, operating system, and unique device identifiers.</li>
                        <li>Usage Data: Information about how you use the app, including interactions and usage patterns.</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <strong>How We Use Your Information</strong>:
                    <ul className="list-disc pl-6">
                        <li>To Provide and Improve Services: Personalize your experience, analyze app usage, and improve our services.</li>
                        <li>Communication: Send you updates, promotions, and notifications related to the app.</li>
                        <li>Security: Protect against unauthorized access and ensure the safety of your data.</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <strong>Sharing Your Information</strong>:
                    <ul className="list-disc pl-6">
                        <li>We do not share your personal information with third parties except:</li>
                        <li>With Your Consent: When you agree to share data with third-party services.</li>
                        <li>Legal Obligations: To comply with legal requirements or to protect our rights.</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <strong>Data Security</strong>:
                    <ul className="list-disc pl-6">
                        <li>We use industry-standard security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure.</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <strong>Your Rights</strong>:
                    <ul className="list-disc pl-6">
                        <li>Access and Correction: You can access and update your personal information within the app.</li>
                        <li>Deletion: You can request the deletion of your account and personal data by contacting us.</li>
                    </ul>
                </li>
                <li className="mb-2">
                    <strong>Changes to This Policy</strong>:
                    <ul className="list-disc pl-6">
                        <li>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</li>
                    </ul>
                </li>
                <li>
                    <strong>Contact Us</strong>:
                    <ul className="list-disc pl-6">
                        <li>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@pruthatek.com" className="text-blue-600 hover:underline">info@pruthatek.com</a>.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default App;
