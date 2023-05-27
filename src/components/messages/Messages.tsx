import "./Messages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Messages = () => {
  return (
    <div className="messages">
      <div className="heading">
        <h4>Messages</h4>
        <FontAwesomeIcon icon={faEdit} className="faIcon" />
      </div>
      {/* <!-- ================= SEARCH BAR ===================== --> */}
      <div className="search-bar">
        <div className="search-wrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="search"
            placeholder="Search messages"
            id="message-search"
          />
        </div>
        <div className="category">
          <h6 className="active">Primary</h6>
          <h6 className="">General</h6>
          <h6 className="message-request">Request(2)</h6>
        </div>
        {/* <!-- ================== MESSAGES ====================== --> */}
        <div className="message">
          <div className="profile-picture">
            <img src={""} alt="" />
            <div className="active"></div>
          </div>
          <div className="message-info">
            <h5 className="userName">Edem Julie</h5>
            <p className="text-muted">Just woke up bruh</p>
          </div>
        </div>
        <div className="message">
          <div className="profile-picture">
            <img src={""} alt="" />
            <div className="active"></div>
          </div>
          <div className="message-info">
            <h5 className="userName">Frank Edward</h5>
            <p className="text-muted">Just woke up bruh</p>
          </div>
        </div>
        <div className="message">
          <div className="profile-picture">
            <img src={""} alt="" />
          </div>
          <div className="message-info">
            <h5 className="userName">Aron Samuel</h5>
            <p className="text-muted">Just woke up bruh</p>
          </div>
        </div>
        <div className="message">
          <div className="profile-picture">
            <img src={""} alt="" />
          </div>
          <div className="message-info">
            <h5 className="userName">Bassey John</h5>
            <p className="text-muted">Just woke up bruh</p>
          </div>
        </div>
        <div className="message">
          <div className="profile-picture">
            <img src={""} alt="" />
          </div>
          <div className="message-info">
            <h5 className="userName">Becky Betty</h5>
            <p className="text-muted">Just woke up bruh</p>
          </div>
        </div>
        <div className="message">
          <div className="profile-picture">
            <img src={""} alt="" />
            <div className="active"></div>
          </div>
          <div className="message-info">
            <h5 className="userName">Muhamad Aisha</h5>
            <p className="text-bold">Asalamalekun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
