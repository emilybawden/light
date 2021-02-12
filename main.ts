input.onButtonPressed(Button.A, function () {
	
})
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Visible)
basic.forever(function () {
    tileDisplay.show()
    tileDisplay.setBrightness(25)
    tileDisplay.showRainbow(1, 360)
    basic.pause(5000)
    tileDisplay.setMatrixColor(0, 0, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
})
