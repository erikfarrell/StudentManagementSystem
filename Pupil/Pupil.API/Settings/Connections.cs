using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Pupil.API.Settings
{
    public static class Connections
    {
        public static string PupilConnection = String.Format(ConfigurationSettings.AppSettings["PupilEntityFramework"], ConfigurationSettings.AppSettings["PupilConnectionString"]);
    }
}