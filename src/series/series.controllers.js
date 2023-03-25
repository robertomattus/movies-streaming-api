const Series = require('../models/series.models')
const SerieGenres = require('../models/serie_genres.models')
const uuid = require('uuid')
const Genres = require('../models/genres.models')
const { Op } = require('sequelize')

const findAllSeries = async (limit, offset, search) => {

    const queryOptions = {
        limit: limit,
        offset: offset,
        where: {}
    }

    if(search){
        queryOptions.where = {
            title: {
                [Op.iLike] : `%${search}%`
            }
        }
    }

    const data = await Series.findAndCountAll(queryOptions)
    return data
}

const createSerie = async (serieObj) => {

    const newSerie = {
        id: uuid.v4(),
        title: serieObj.title,
        synopsis: serieObj.synopsis,
        releaseYear: serieObj.releaseYear,
        director: serieObj.director,
        classification: serieObj.classification,
        rating: serieObj.rating
    }
    const data = await Series.create(newSerie)
    return data
}

const addGenreToSeries = async (dataObj) => {
    const data = await SerieGenres.create({
        id: uuid.v4(),
        seriesId: dataObj.seriesId,
        genreId: dataObj.genreId
    })
    return data
}

const findAllSeriesByGenre = async (genreId) => {
    const data = await Series.findAll({
        include: {
            model: Genres,
            where: {
                id: genreId
            }
        }
    }) 
    return data
}

module.exports = {
    findAllSeries,
    createSerie,
    addGenreToSeries,
    findAllSeriesByGenre
}