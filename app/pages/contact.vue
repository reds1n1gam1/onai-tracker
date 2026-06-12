<template>
  <div>
    <h1>Contact Us</h1>

    <p>
      We're here to help. Reach out to us with any questions, feedback, or
      support requests.
    </p>

    <h2>Contact at a Glance</h2>

    <h3>We're here to help</h3>
    <p>Our team is ready to assist you with any questions.</p>

    <h3>Quick response</h3>
    <p>We usually respond within 24 hours.</p>

    <h3>Your privacy matters</h3>
    <p>We respect your privacy and keep your data secure.</p>

    <h3>Feedback welcome</h3>
    <p>Share your thoughts to help us improve Time Tracker.</p>

    <h2>Send Us a Message</h2>

    <p>
      Fill out the form below and we'll get back to you as soon as possible.
    </p>

    <form>
      <label for="name">Your name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your full name"
      />

      <label for="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
      />

      <label for="subject">Subject</label>
      <select id="subject" name="subject">
        <option value="">Choose a subject</option>
        <option value="support">Support request</option>
        <option value="feedback">Feedback</option>
        <option value="billing">Billing question</option>
        <option value="account">Account question</option>
        <option value="other">Other</option>
      </select>

      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Please describe your question or feedback in detail..."
      ></textarea>

      <button type="submit">Send Message</button>
    </form>

    <p>
      Your information is safe with us and will only be used to respond to your
      inquiry.
    </p>

    <h2>Contact Options</h2>

    <h3>Email Support</h3>
    <p><strong>support@timetracker.com</strong></p>
    <p>We usually respond within 24 business hours.</p>

    <h3>Live Chat</h3>
    <p><strong>Available in the app</strong></p>
    <p>Chat with our support team in real time.</p>

    <h3>Help Center</h3>
    <p><strong>Browse articles and guides</strong></p>
    <p>Find answers to common questions and learn more.</p>

    <h3>Send Feedback</h3>
    <p><strong>We'd love to hear your thoughts</strong></p>
    <p>Your feedback helps us improve the product.</p>

    <h2>Before You Contact Us</h2>

    <p>Here are some quick answers that might help.</p>

    <h3>How do I reset my password?</h3>
    <p>
      Go to the sign in page and choose the password reset option. Follow the
      instructions sent to your email.
    </p>

    <h3>How do I export my data?</h3>
    <p>
      You can export your data from the settings page when export options are
      available.
    </p>

    <h3>Can I upgrade or downgrade my plan anytime?</h3>
    <p>Yes. You can manage your plan from your account settings.</p>

    <h3>How do I delete my account?</h3>
    <p>
      You can request account deletion from your settings page or contact
      support for help.
    </p>

    <h3>Where can I find keyboard shortcuts?</h3>
    <p>
      Keyboard shortcuts are available in the Help page and inside the app
      settings.
    </p>

    <h2>Still Need Help?</h2>

    <p>Our support team is always here for you.</p>

    <p>
      <strong>Go to Help Center</strong>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
