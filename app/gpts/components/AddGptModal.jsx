import { saveNewGptAPI } from '@/lib/services/gpts';
import { useEffect, useState } from 'react';

export const AddGptModal = ({
  closeModal,
  showAddModal,
}) => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    gptLink: '',
    twitterProfile: '',
    categories: '',
  });
  const [formError, setFormError] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer = null;
    if (message) {
      timer = setTimeout(() => {
        setMessage('');
      }, [3000]);
    }
    return () => clearTimeout(timer);
  }, [message]);

  const handleChange = (e) => {
    if (formError[e.target.name]) {
      setFormError({
        ...formError,
        [e.target.name]: ''
      });
    }
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  const saveData = async () => {
    setFormError({});
    let error = {};
    if (!formState.gptLink.startsWith('https://chat.openai.com')) {
      error.gptLink = 'Enter a valid openAI GPT URL'
    }

    if (!formState.title) {
      error.title = 'Please enter a title'
    }

    if (error.title || error.gptLink) {
      setFormError(error);
      return;
    }

    const data = await saveNewGptAPI(formState);
    closeModal();
    if (data?.content) {
      setMessage("Added GPT to directory");
    } else if (data?.message) {
      setMessage(data?.message);
    } else {
      setMessage("Something went wrong. try again.");
    }
  }

  return (
    <>
      <dialog className={`modal ${showAddModal ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
          </form>
          <div>
            <h3 className="text-center">GPT Details</h3>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" name="title" onChange={handleChange} value={formState.title} placeholder="Add a title" className={`input input-bordered w-full ${formError.title ? 'border-red-700' : ''}`} />
              {formError.title  && <label className='text-red-700 text-sm'>{formError.title}</label>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea name="description" onChange={handleChange} value={formState.description} className="textarea textarea-bordered h-24" placeholder="Something about your GPT..."></textarea>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">GPT URL</span>
              </label>
              <input type="text" name="gptLink" onChange={handleChange} value={formState.gptLink} placeholder="https://....." className={`input input-bordered w-full ${formError.gptLink ? 'border-red-700' : ''}`} />
              {formError.gptLink  && <label className='text-red-700 text-sm'>{formError.gptLink}</label>}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">X URL</span>
              </label>
              <input type="text" name="twitterProfile" onChange={handleChange} value={formState.twitterProfile} placeholder="https://....." className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <textarea name="categories" onChange={handleChange} value={formState.categories} className="textarea textarea-bordered h-24" placeholder="Education, Artificial Inteligence, Entertainment"></textarea>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-active btn-accent" onClick={saveData}>Submit</button>
            </div>

          </div>
        </div>
      </dialog>

      {
        message && (
          <div className="toast toast-top toast-end">
            <div className="alert alert-info">
              <span>{message}</span>
            </div>
          </div>
        )
      }
    </>
  );
};
