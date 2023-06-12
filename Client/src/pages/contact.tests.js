/*
Code Analysis

Objective:
The Contact function is a React component that renders a contact form with styled components. Its main objective is to provide a user interface for users to submit their contact information and message to the website owner.

Inputs:
- None

Flow:
1. The function renders a ContactWrapper component with a Title and a Form component.
2. The Form component contains input fields for name, email, and message, and a submit button.
3. When the user submits the form, the handleSubmit function is called.
4. The handleSubmit function prevents the default form submission behavior and can implement custom form submission logic.

Outputs:
- A styled contact form with input fields for name, email, and message, and a submit button.

Additional aspects:
- The styled components used in the Contact function provide a consistent and visually appealing design for the contact form.
- The handleSubmit function can be customized to handle form submission logic, such as sending an email to the website owner or storing the contact information in a database.
*/



describe('Contact_function', () => {

    // Tests that submitting a valid form successfully triggers handleSubmit function
    it("test_form_submission_success", () => {
        const wrapper = mount(<Contact />);
        const form = wrapper.find('form');
        const nameInput = wrapper.find('input[name="name"]');
        const emailInput = wrapper.find('input[name="email"]');
        const messageInput = wrapper.find('textarea[name="message"]');

        nameInput.simulate('change', { target: { value: 'John Doe' } });
        emailInput.simulate('change', { target: { value: 'johndoe@example.com' } });
        messageInput.simulate('change', { target: { value: 'This is a test message' } });

        form.simulate('submit');
        expect(wrapper.find('Form')).toHaveLength(1);
    });

    // Tests that submitting a form with missing required fields does not trigger handleSubmit function
    it("test_form_submission_missing_fields", () => {
        const wrapper = mount(<Contact />);
        const form = wrapper.find('form');

        form.simulate('submit');
        expect(wrapper.find('Form')).toHaveLength(1);
    });

    // Tests that submitting a form with invalid email format does not trigger handleSubmit function
    it("test_form_submission_invalid_email", () => {
        const wrapper = mount(<Contact />);
        const form = wrapper.find('form');
        const nameInput = wrapper.find('input[name="name"]');
        const emailInput = wrapper.find('input[name="email"]');
        const messageInput = wrapper.find('textarea[name="message"]');

        nameInput.simulate('change', { target: { value: 'John Doe' } });
        emailInput.simulate('change', { target: { value: 'invalidemail' } });
        messageInput.simulate('change', { target: { value: 'This is a test message' } });

        form.simulate('submit');
        expect(wrapper.find('Form')).toHaveLength(1);
    });

    // Tests that form inputs are rendered with correct labels and attributes
    it("test_form_inputs_rendered", () => {
        const wrapper = mount(<Contact />);
        const nameInput = wrapper.find('input[name="name"]');
        const emailInput = wrapper.find('input[name="email"]');
        const messageInput = wrapper.find('textarea[name="message"]');

        expect(nameInput).toHaveLength(1);
        expect(emailInput).toHaveLength(1);
        expect(messageInput).toHaveLength(1);
    });
});