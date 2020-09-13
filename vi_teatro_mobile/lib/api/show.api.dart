import 'package:http/http.dart' as http;
import 'dart:convert' as convert;

import 'package:vi_teatro_mobile/api/response.dart';
import 'package:vi_teatro_mobile/main.dart';

class ShowApi {
  Future<Response> getAllShow({
    http.Client client,
  }) async {
    try {
      var urlValue = '$urlAPI/show';
      var response =
          await (client != null ? client.get(urlValue) : http.get(urlValue));
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
