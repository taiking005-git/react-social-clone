import "./Friendrequests.css";

const friendrequests = () => {
  return (
    <div className="friend-requests">
      {/* <!-- ============================FRIENDS REQUEST ============================== --> */}
      <h4 className="text-muted">Requests</h4>
      {/* <!-- =============== REQUEST 1 =============================== --> */}
      <div className="friend-request">
        <div className="request">
          <div className="info">
            <div className="profile-picture">
              <img src={""} alt="" />
            </div>
            <div>
              <h5 className="userName">Deborah Williams</h5>
              <p className="text-muted">12 Mutual Friends</p>
            </div>
          </div>
          <div className="action-button">
            <button className="btn btn-primary">Accept</button>
            <button className="btn">Decline</button>
          </div>
        </div>
      </div>
      {/* <!-- =============== REQUEST 2 =============================== --> */}
      <div className="friend-request">
        <div className="request">
          <div className="info">
            <div className="profile-picture">
              <img src={""} alt="" />
            </div>
            <div>
              <h5 className="userName">Derek Mark</h5>
              <p className="text-muted">1 Mutual Friends</p>
            </div>
          </div>
          <div className="action-button">
            <button className="btn btn-primary">Accept</button>
            <button className="btn">Decline</button>
          </div>
        </div>
      </div>
      {/* <!-- =============== REQUEST 3 =============================== --> */}
      <div className="friend-request">
        <div className="request">
          <div className="info">
            <div className="profile-picture">
              <img src={""} alt="" />
            </div>
            <div>
              <h5 className="userName">Green Marlie</h5>
              <p className="text-muted">3 Mutual Friends</p>
            </div>
          </div>
          <div className="action-button">
            <button className="btn btn-primary">Accept</button>
            <button className="btn">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default friendrequests;
