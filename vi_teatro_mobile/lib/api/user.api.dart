import 'package:http/http.dart' as http;
import 'dart:convert' as convert;

import 'package:vi_teatro_mobile/api/response.dart';
import 'package:vi_teatro_mobile/main.dart';
import 'package:vi_teatro_mobile/models/user.model.dart';

class UserApi {
  Future<Response> addUser({
    http.Client clientHttp,
    user: UserModel,
  }) async {
    try {
      var urlValue = '$urlAPI/user';
      var response = await (clientHttp != null
          ? clientHttp.post(urlValue)
          : http.post(
              urlValue,
              headers: headersApi,
              body: convert.jsonEncode(user.toMap()),
            ));

      if (response.statusCode == 200) {
        return Response(
          status: EnumResponse.success,
          value: convert.jsonDecode(response.body),
        );
      }
    } catch (e) {
      print(e);
    }

    return Response(
      status: EnumResponse.error,
    );
  }
}
