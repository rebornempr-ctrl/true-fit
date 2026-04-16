import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/contacts";

module {
  public type ContactSubmission = Types.ContactSubmission;
  public type CreateContactArgs = Types.CreateContactArgs;
  public type ContactId = Types.ContactId;

  public func addContact(
    contacts : List.List<ContactSubmission>,
    nextId : { var value : Nat },
    args : CreateContactArgs,
  ) : ContactSubmission {
    let id = nextId.value;
    nextId.value := nextId.value + 1;
    let submission : ContactSubmission = {
      id;
      name = args.name;
      email = args.email;
      message = args.message;
      createdAt = Time.now();
    };
    contacts.add(submission);
    submission;
  };

  public func listContacts(contacts : List.List<ContactSubmission>) : [ContactSubmission] {
    contacts.toArray();
  };
};
