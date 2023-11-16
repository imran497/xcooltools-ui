export const GPTsList = ({
  gptsList = [],
}) => {

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-md table-pin-cols">
          <thead>
            <tr>
              <td></td>
              <td>Title</td>
              <td>Description</td>
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
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <a className="link font-bold max-w-[120px]" href={item.gptLink} target="_blank">{item.title}</a>
                    </td>
                    <td>
                      <div className="max-w-[320px]">
                        {item.description}
                      </div>
                    </td>
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
    </div>
  )
};
