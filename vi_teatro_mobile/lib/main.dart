import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';
import 'package:vi_teatro_mobile/language/demo_localizations_delegate.dart';
import 'package:vi_teatro_mobile/providers/user.provider.dart';
import 'package:vi_teatro_mobile/routes/pages_app.dart';

const urlAPI = 'http://localhost:3000';
const headersApi = {'Content-Type': 'application/json'};
void main() => runApp(
      MultiProvider(
        providers: [
          ChangeNotifierProvider(create: (context) => UserProvider()),
        ],
        child: MyApp(),
      ),
    );

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
    return MaterialApp(
      theme: ThemeData(
        accentColor: Colors.blueGrey,
      ),
      localizationsDelegates: [
        const DemoLocalizationsDelegate(),
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: [
        const Locale('en', ''),
        const Locale('pt', ''),
      ],
      debugShowCheckedModeBanner: false,
      home: PagesApp.home,
    );
  }
}
