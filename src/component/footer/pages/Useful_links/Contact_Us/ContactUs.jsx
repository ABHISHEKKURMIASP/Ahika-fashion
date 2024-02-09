import "./contactUs.css"


const ContacUs = () => {
  return (
    <>
        <div id="contactUs">
            <div id="heading00">
              <h1>CONTACT US</h1>
              <p id="gotQuestions">GOT ANY QUESTIONS?</p>
              <p id="useOfForm">Use The Form Below To Get In Touch With The Sales Team</p>
            </div>
            <form id="form">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email*" />
              <input type="text" placeholder="Phone number" />
              <input type="text" placeholder="Comment" id="comment"/>
              <div id="btnDiv">
              <button>SEND MESSAGE</button>
              </div>
            </form>
        </div>
    </>
  )
}

export default ContacUs