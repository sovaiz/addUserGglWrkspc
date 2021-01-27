function addUsertoGroup(userEmail) {
  var userEmail = 'Name@gmail.com'
  var groupId = "group-name@googlegroups.com";
  var group = GroupsApp.getGroupByEmail(groupId);

  
  try { var hasMember = group.hasUser(userEmail);}
  catch(e){Logger.log(userEmail+" is already in the group"); return}

  var newMember = {email: userEmail, role: "MEMBER"};

  AdminDirectory.Members.insert(newMember, groupId);