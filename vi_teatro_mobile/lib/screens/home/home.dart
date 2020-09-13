import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:vi_teatro_mobile/api/response.dart';
import 'package:vi_teatro_mobile/language/demo_localizations.dart';
import 'package:vi_teatro_mobile/models/user.model.dart';
import 'package:vi_teatro_mobile/providers/user.provider.dart';
import 'package:http/http.dart' as http;

class Home extends StatefulWidget {
  const Home({
    this.httpClient,
  });

  final http.Client httpClient;
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  void initState() {
    super.initState();
  }

  getValuesStatus(EnumResponse statusFetching) {
    switch (statusFetching) {
      case EnumResponse.error:
        return {
          'text': 'Algo deu errado',
          'color': Colors.red,
        };
        break;
      case EnumResponse.success:
        return {
          'text': 'Sucesso',
          'color': Colors.green,
        };
        break;
      default:
    }
    return {
      'text': 'Testar',
      'color': Colors.blue,
    };
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<UserProvider>(builder: (context, provider, child) {
      dynamic status = getValuesStatus(provider.statusFetching);
      return Scaffold(
        appBar: AppBar(
          centerTitle: false,
          title: Text(
            DemoLocalizations.of(context).appName,
          ),
        ),
        body: Column(
          children: <Widget>[
            Row(
              children: <Widget>[
                FloatingActionButton(
                  child: Icon(Icons.add),
                  onPressed: () => provider.addUser(
                    clientHttp: widget.httpClient,
                    user: UserModel(
                      firebaseCode: 'teste',
                      type: UserEnum.MANAGEMENT,
                    ),
                  ),
                ),
                Text('Teste adicionar 1 usuário'),
              ],
            ),
            Row(
              children: <Widget>[
                Text('Status: '),
                Text(
                  status['text'],
                  style: TextStyle(color: status['color']),
                )
              ],
            )
          ],
        ),
      );
    });
  }
}
