import defaultLogo from "../../../assets/icons/default-user.svg";
import { useGlobals } from "../../hooks/useGlobals";
import { Messages, serverApi } from "../../../lib/config";
import { useState } from "react";
import { MemberUpdateInput } from "../../../lib/types/member";
import { T } from "../../../lib/types/common";
import MemberService from "../../services/MemberService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";

function Layout() {
  const { authMember, setAuthMember } = useGlobals();
  const [memberImage, setMemberImage] = useState<string>(
    authMember?.memberImage
      ? `${serverApi}/${authMember.memberImage}`
      : defaultLogo
  );
  console.log("authMember?.memberImage:", authMember?.memberImage);

  const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>(
    {
      memberNick: authMember?.memberNick,
      memberPhone: authMember?.memberPhone,
      memberAddress: authMember?.memberAddress,
      memberDesc: authMember?.memberDesc,
      memberImage: authMember?.memberImage,
    }
  );

  /** HANDLERS **/
  const memberNickHandler = (e: T) => {
    memberUpdateInput.memberNick = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberPhoneHandler = (e: T) => {
    memberUpdateInput.memberPhone = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberAddressHandler = (e: T) => {
    memberUpdateInput.memberAddress = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberDescHandler = (e: T) => {
    memberUpdateInput.memberDesc = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleSubmitButton = async () => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      console.log("memberUpdateInput:", memberUpdateInput);

      if (
        memberUpdateInput.memberNick === "" &&
        memberUpdateInput.memberPhone === "" &&
        memberUpdateInput.memberAddress === "" &&
        memberUpdateInput.memberDesc === ""
      ) {
        throw new Error(Messages.error3);
      }

      const member = new MemberService();
      const result = await member.updateMember(memberUpdateInput);
      setAuthMember(result);

      await sweetTopSmallSuccessAlert("Modified successfully!", 700);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const handleImageViewer = (e: T) => {
    const file = e.target.files[0];
    console.log("file:", file);
    const fileType = file.type,
      validateImageTypes = ["image/jpg", "image/jpeg", "image/png"];

    if (!validateImageTypes.includes(fileType)) {
      sweetErrorHandling(Messages.error5).then();
    } else {
      memberUpdateInput.memberImage = file;
      setMemberUpdateInput({ ...memberUpdateInput });
      setMemberImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div
                  className="dashboard-item-taitel"
                  style={{ marginLeft: "30px" }}
                >
                  <p></p>
                  <img
                    src={memberImage}
                    alt="img"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />

                  <div className="dashboard-menu-profile-text">
                    <p>Upload image: JPG, JPEG, PNG formats only!</p>
                  </div>
                </div>
                <div className="dashboard-edit-profile-from">
                  <div className="shopping-cart-new-address-from">
                    <div className="shopping-cart-new-address-from-item">
                      <div className="shopping-cart-new-address-from-inner">
                        <input
                          type="file"
                          name="default"
                          id="default"
                          className="border p-2"
                          onChange={handleImageViewer}
                        />
                      </div>
                    </div>
                    <div className="shopping-cart-new-address-from-item">
                      <div className="shopping-cart-new-address-from-inner">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput11"
                          placeholder={authMember?.memberNick}
                          value={memberUpdateInput.memberNick}
                          name="memberNick"
                          onChange={memberNickHandler}
                        />
                      </div>
                      <div className="shopping-cart-new-address-from-inner">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput12"
                          placeholder={authMember?.memberPhone ?? "no phone"}
                          value={memberUpdateInput.memberPhone}
                          name="memberPhone"
                          onChange={memberPhoneHandler}
                        />
                      </div>
                    </div>
                    <div className="shopping-cart-new-address-from-item">
                      <div className="shopping-cart-new-address-from-inner">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput13"
                          placeholder={
                            authMember?.memberAddress
                              ? authMember.memberAddress
                              : "no address"
                          }
                          value={memberUpdateInput.memberAddress}
                          name="memberAddress"
                          onChange={memberAddressHandler}
                        />
                      </div>
                      <div className="shopping-cart-new-address-from-inner">
                        <label className="form-label">Decsription</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput8"
                          placeholder={
                            authMember?.memberDesc
                              ? authMember.memberDesc
                              : "no description"
                          }
                          value={memberUpdateInput.memberDesc}
                          name="memberDesc"
                          onChange={memberDescHandler}
                        />
                      </div>
                    </div>

                    <div className="shopping-cart-new-address-from-btn">
                      <div className="check-btn-two">
                        <button
                          className="main-btn-four"
                          onClick={handleSubmitButton}
                        >
                          Save now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
