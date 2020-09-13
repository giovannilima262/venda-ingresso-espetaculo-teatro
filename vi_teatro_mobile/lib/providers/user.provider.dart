import 'dart:collection';

import 'package:flutter/material.dart';
import 'package:vi_teatro_mobile/api/response.dart';
import 'package:http/http.dart' as http;
import 'package:vi_teatro_mobile/api/user.api.dart';
import 'package:vi_teatro_mobile/models/user.model.dart';

class UserProvider extends ChangeNotifier {
  final userApi = UserApi();
  final List<UserModel> _items = [];
  EnumResponse _statusFetching;

  UnmodifiableListView<UserModel> get items => UnmodifiableListView(_items);

  EnumResponse get statusFetching => _statusFetching;

  void addUser({http.Client clientHttp, UserModel user}) {
    userApi.addUser(clientHttp: clientHttp, user: user).then((data) {
      _statusFetching = data.status;
      notifyListeners();
    });
  }
}
