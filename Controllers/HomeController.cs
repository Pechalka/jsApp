using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace jsApp.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }



        public ActionResult GetTemplatets()
        {
            return Json(new
                            {
                                templates = TemplatesService.GetAll()
                            }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetTemplate(string id)
        {
            return Json(TemplatesService.GetBy(id), JsonRequestBehavior.AllowGet);
        }



        public ActionResult GetMenu()
        {
            var items = new List<MenuItem>
                            {
                                new MenuItem {Name = "Letters templates", Url = "#templates"},
                                new MenuItem {Name = "Media Box Setup", Url = "#mediaboxsetup"},
                                new MenuItem {Name = "test", Url = "#test"},
                                new MenuItem{ Name = "static html", Url = "#staticHtml"}
                            };
            return Json(new { items }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetMediaBoxData()
        {
            return Json("hello", JsonRequestBehavior.AllowGet);
        }

        public ActionResult GettestData()
        {
            return Json(new { name = "Peta"}, JsonRequestBehavior.AllowGet);
        }

    }
}

public class TemplatesService
{
    static readonly List<Template> _templates = new List<Template>
                                           {
                                               new Template{ Id = "1", Name = "Name1", Description = "Description1"},
                                               new Template{ Id = "2", Name = "Name2", Description = "Description2"},
                                           }; 
    public static List<Template> GetAll()
    {
        return _templates;
    }

    public static Template GetBy(string id)
    {
        return _templates.FirstOrDefault(_ => _.Id == id);
    }
}

public class Template
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
}

public class MenuItem
{
    public string Name { get; set; }
    public string Url { get; set; }
}