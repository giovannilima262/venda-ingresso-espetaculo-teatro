import 'package:flutter/material.dart';

class DemoLocalizations {
  DemoLocalizations(this.locale);

  final Locale locale;

  static DemoLocalizations of(BuildContext context) {
    return Localizations.of<DemoLocalizations>(context, DemoLocalizations);
  }

  static Map<String, Map<String, String>> _localizedValues = {
    'en': {
      'app_name': 'ViTeatro',
    },
    'pt': {
      'app_name': 'ViTeatro',
    },
  };

  String get appName {
    return _localizedValues[locale.languageCode]['app_name'];
  }
}
