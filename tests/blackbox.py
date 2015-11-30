# pip install python-bond
from bond import make_bond
import unittest
import webbrowser
from selenium import webdriver
import os


class JsCallTest(unittest.TestCase):
    """Default class to setup js configs """

    def alert(self, *arg):
        print("Error:", arg)

    def setUp(self):
        self.driver = None
        self.js = make_bond('JavaScript')
        self.js.export(self.alert, 'alert')

        jsfile = open('Scripts/atlas.js').read()
        self.js.eval_block(jsfile)

        jsfile = open('Scripts/boardGame.js').read()
        self.js.eval_block(jsfile)

        jsfile = open('Scripts/gameObject.js').read()
        self.js.eval_block(jsfile)

    def tearDown(self):
        if self.driver:
            self.driver.close()


class ExampleTest(JsCallTest):
    """Example of black box calls"""

    def test_fetch_dist(self):
        """The example calls a method from javascript's files"""
        result = self.js.call('fetchDisc', 'blue')
        self.assertIsNone(result)


class ExampleTest2(JsCallTest):
    """Example of funtionalit test"""

    @unittest.skip("skipping as Travis do not accept open browser")
    def test_open_file(self):
        """ Just open the file into the browser """
        result = webbrowser.open("index.html")
        self.assertTrue(result)

    @unittest.skip("skipping as Travis do not accept open browser")
    def test_selenium(self):
        """ Open the file into selenium and check the title """
        self.driver = webdriver.Firefox()
        self.driver.get("file:///" + os.getcwd() + "/index.html")
        assert "Grandes Pontos" in self.driver.title
