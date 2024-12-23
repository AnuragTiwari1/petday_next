export default function InfoSection() {
  return (
    <section className="container">
      <div className="section_space_lg pt-0 mt-5">
        <div className="row justify-content-center">
          <div className="col col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_item iconbox_overicon">
              <div className="item_icon">
                <i className="fas fa-phone" />
              </div>
              <div className="item_content">
                <h3 className="item_title">Phone</h3>
                <ul className="item_info_list unorder_list_block">
                  <li>(913) 756-3126</li>
                  <li>(921) 557-1203</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_item iconbox_overicon">
              <div className="item_icon">
                <i className="fas fa-envelope" />
              </div>
              <div className="item_content">
                <h3 className="item_title">Email</h3>
                <ul className="item_info_list unorder_list_block">
                  <li>petopia@example.com</li>
                  <li>petopia@email.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_item iconbox_overicon">
              <div className="item_icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="item_content">
                <h3 className="item_title">Address</h3>
                <ul className="item_info_list unorder_list_block">
                  <li>17 Parkman Place, 2122</li>
                  <li>United States</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_item iconbox_overicon">
              <div className="item_icon">
                <i className="fas fa-clock" />
              </div>
              <div className="item_content">
                <h3 className="item_title">Open Hours</h3>
                <ul className="item_info_list unorder_list_block">
                  <li>Mon - Fri: 7am - 6pm</li>
                  <li>Saturday: 9am - 4pm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
