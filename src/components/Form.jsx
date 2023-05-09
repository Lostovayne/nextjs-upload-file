import Image from 'next/image'

const Form = ({ handleSelect, handleSubmit, file }) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='flex flex-col gap-4 max-w-md mx-auto text-center mt-52'>
        {file ? (
          <Image
            width={150}
            height={150}
            src={URL.createObjectURL(file)}
            alt='file'
            className='border-2  rounded-lg object-cover mx-auto w-44 h-44'
          />
        ) : (
          <p className=' w-full h-44 font-extrabold text-2xl flex justify-center items-center'>
            Upload File
          </p>
        )}

        <input
          id='file'
          className='border-none outline-none font-medium rounded-lg px-4 py-2'
          type='file'
          onChange={handleSelect}
        />
        <button
          type='submit'
          className='border-2 px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 font-medium'>
          Upload File
        </button>
      </fieldset>
    </form>
  )
}
export default Form
