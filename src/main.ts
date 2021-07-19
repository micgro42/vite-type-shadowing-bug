import Error from "@/data-model/Error";

function getError(): Error {
  if ( Math.random() < 0.5 ) {
    throw new Error('I\'m a native javascript Error!');
  }

  return { message: 'I\'m the expected custom error object.' };
}
