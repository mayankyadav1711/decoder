import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaCheckCircle } from "react-icons/fa";
import Input from "../components/forms/Input";
import Checkbox from "../components/forms/Checkbox";
import Button from "../components/forms/Button";
import FormError from "../components/forms/FormError";
import useSignUp from "../hooks/useSignUp";
import Blobs from "./Blobs";

function SignUpRoute() {
  return (
    <>
      <section className="bg-gray-900 text-white min-h-screen pt-20 overflow-hidden">
        <div className="container mx-auto px-4 py-12 lg:flex lg:items-center lg:justify-between">
          <Blobs />
          <RightSideForm />
        </div>
      </section>
    </>
  );
}


function RightSideForm() {
  return (
    <div className="lg:w-1/2 lg:pl-12">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-purple-400 mb-6"
        >
          Welcome Buddy 👋!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6 text-gray-300"
        >
          Enter your email and password to sign up
        </motion.p>

        <SignUpForm />
      </motion.div>
    </div>
  );
}

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [marketingAccept, setMarketingAccept] = useState(false);

  const { signUp, error, isLoading, isSignedIn } = useSignUp();

  const handleSubmit = async (event) => {
    event.preventDefault();
    signUp({ email, password, passwordConfirmation });
  };

  if (isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="grid grid-cols-6 gap-6 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className="col-span-6">
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          error={error}
          icon={<FaEnvelope className="text-gray-400" />}
          className="bg-gray-800 text-white border-gray-700 focus:border-purple-500"
          labelClassName="text-white"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Input
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          error={error}
          icon={<FaLock className="text-gray-400" />}
          className="bg-gray-800 text-white border-gray-700 focus:border-purple-500"
          labelClassName="text-white"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Input
          label="Password Confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          type="password"
          name="passwordConfirmation"
          error={error}
          icon={<FaLock className="text-gray-400" />}
          className="bg-gray-800 text-white border-gray-700 focus:border-purple-500"
          labelClassName="text-white"
        />
      </div>

      <div className="col-span-6">
        <Checkbox
          label="Receive marketing emails"
          checked={marketingAccept}
          onChange={(e) => setMarketingAccept(e.target.checked)}
          name="marketingAccept"
          icon={<FaCheckCircle className="text-purple-500" />}
          className="text-white"
        />
      </div>

      <FormError error={error} className="col-span-6 text-red-400" />

      <div className="col-span-6">
        <Button
          wide
          loading={isLoading}
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
        >
          Sign Up
        </Button>
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-purple-400 hover:underline">
            Sign in
          </Link>
          .
        </p>
      </div>
    </motion.form>
  );
}

export default SignUpRoute;
