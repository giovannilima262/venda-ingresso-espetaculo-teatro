import 'dart:math';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:vi_teatro_mobile/api/response.dart';
import 'package:vi_teatro_mobile/language/demo_localizations.dart';
import 'package:vi_teatro_mobile/models/user.model.dart';
import 'package:vi_teatro_mobile/providers/user.provider.dart';

import '../../models/user.model.dart';

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

  final _formKey = GlobalKey<FormState>();
  final scaffoldKey = new GlobalKey<ScaffoldState>();
  final user = UserModel();
  bool isManager = false;

  @override
  Widget build(BuildContext context) {
    return Consumer<UserProvider>(
      builder: (context, provider, child) {
        dynamic status = getValuesStatus(provider.statusFetching);
        return Scaffold(
          key: scaffoldKey,
          appBar: AppBar(
            centerTitle: false,
            title: Text(
              DemoLocalizations.of(context).appName,
            ),
          ),
          body: Column(
            children: <Widget>[
              Form(
                key: _formKey,
                child: Padding(
                  padding: const EdgeInsets.only(left: 24.0, right: 24.0),
                  child: Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(top: 24),
                        child: Text(
                          "VI Theater",
                          style: TextStyle(
                            fontSize: 36,
                            fontWeight: FontWeight.w100,
                          ),
                        ),
                      ),
                      Text(
                        "Teatrão mo filho",
                        style: TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w400,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 26, bottom: 24),
                        child: Text(
                          "Cadastrar-se",
                          style: TextStyle(
                            fontSize: 32,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                      TextFormField(
                        decoration: InputDecoration(hintText: "Nome"),
                        validator: (value) => value.isEmpty ? "O nome é obrigatório" : null,
                        onSaved: (name) => user.name = name,
                      ),
                      TextFormField(
                        decoration: InputDecoration(hintText: "Email"),
                        validator: (value) => value.isEmpty ? "O email é obrigatório" : null,
                        onSaved: (email) => user.email = email,
                      ),
                      TextFormField(
                        decoration: InputDecoration(hintText: "Senha"),
                        validator: (value) => value.isEmpty ? "O senha é obrigatório" : null,
                        onSaved: (password) => user.password = password,
                      ),
                      Row(
                        children: [
                          Text("Cliente"),
                          Switch(
                            value: isManager,
                            onChanged: (_) => {
                              setState(() => isManager = !isManager),
                            },
                          ),
                          Text("Gerente"),
                        ],
                      ),
                      RaisedButton(
                        onPressed: () => onSignUpClicked(provider),
                        child: Text("Cadastrar"),
                      ),
                      Text("Ja tem uma conta?"),
                      GestureDetector(
                        onTap: () => print("tocou"),
                        child: Text(
                          "Acessar",
                          style: TextStyle(
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
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
      },
    );
  }

  onSignUpClicked(UserProvider provider) {
    return {
      if (_formKey.currentState.validate())
        {
          _formKey.currentState.save(),
          user.type = isManager ? UserEnum.MANAGER : UserEnum.CLIENT,
          user.firebaseCode = Random.secure().nextDouble().toStringAsPrecision(10),
          provider.addUser(
            clientHttp: widget.httpClient,
            user: user,
          ),
        },
    };
  }
}
