import SignUpForm from '../components/auth/SignUpForm';

function SignUpRoute() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-body lg:grid-cols-12 w-full">
        <section className="relative flex h-32 bg-gray-200 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />

         
        </section>

        <main className="flex items-center justify-center px-8 py-2 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative block lg:hidden">
              
            </div>
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome Buddy 👋!
            </h1>

            <p className="my-4 leading-relaxed text-gray-500">
              Enter your email and password to sign up
            </p>

            <SignUpForm />
          </div>
        </main>
      </div>
    </section>
  );
}

export default SignUpRoute;
