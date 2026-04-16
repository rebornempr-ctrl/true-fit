import Common "common";

module {
  public type ContactId = Common.ContactId;
  public type Timestamp = Common.Timestamp;

  public type ContactSubmission = {
    id : ContactId;
    name : Text;
    email : Text;
    message : Text;
    createdAt : Timestamp;
  };

  public type CreateContactArgs = {
    name : Text;
    email : Text;
    message : Text;
  };
};
