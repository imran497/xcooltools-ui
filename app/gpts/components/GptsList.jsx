const OpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z" />
    <path d="M14 3v2h3.59L9.83 12.76l1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

export default OpenIcon;

export const GPTsList = ({
  gptsList = [],
}) => {

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="hidden md:block">
        <table className="table table-md table-pin-cols">
          <thead>
            <tr>
              <td></td>
              <td>Title</td>
              <td>Description</td>
              <td>Categories</td>
              <td>X (Twitter)</td>
            </tr>
          </thead>
          <tbody>
            {
              gptsList.map((item, i) => {

                const splittedtwtProfile = item.twitterProfile?.split('/');
                let twitterUsername = '';
                if (splittedtwtProfile) twitterUsername = splittedtwtProfile[splittedtwtProfile.length - 1];

                return (
                  <tr key={i} className={`${i % 2 !== 0 ? 'bg-slate-200' : ''}`}>
                    <td>{i + 1}</td>
                    <td>
                      <a className="link font-bold max-w-[120px]" href={item.gptLink} target="_blank">{item.title}</a>
                    </td>
                    <td>
                      <div className="max-w-[320px]">
                        {item.description}
                      </div>
                    </td>
                    <td>{item.categories}</td>
                    <td>
                      {twitterUsername && <a className="link decoration-transparent" href={item.twitterProfile} target="_blank">@{twitterUsername}</a>}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </div>

        <div className="md:hidden">
        {
          gptsList.map((item, i) => {

            const splittedtwtProfile = item.twitterProfile?.split('/');
            let twitterUsername = '';
            if (splittedtwtProfile) twitterUsername = splittedtwtProfile[splittedtwtProfile.length - 1];

            return (
              <div key={i} className={`${i % 2 !== 0 ? 'bg-slate-200' : ''} my-2 shadow-md`}>
                <div className="px-2 py-3">
                  <div>
                    <a className="link font-bold max-w-[120px]" href={item.gptLink} target="_blank">{item.title}</a>
                  </div>
                  <div>
                    <div className="max-w-[320px] text-sm">
                      {item.description}
                    </div>
                  </div>
                  <div>
                    {item.categories?.split(',')?.map(item => item.trim() && <span key={item} className="text-xs px-2 rounded-sm bg-accent">{item}</span>)}
                  </div>
                  <div>
                    {twitterUsername && (
                      <span className="text-sm">by <a className="link decoration-transparent" href={item.twitterProfile} target="_blank">@{twitterUsername} <OpenIcon /></a></span>
                    )}
                  </div>
                </div>
                <a href={item.gptLink} target="_blank" className="btn bg-sky-700 w-full rounded-none text-white">Open</a>
              </div>
            )
          })
        }
        </div>

      </div>
    </div>
  )
};
